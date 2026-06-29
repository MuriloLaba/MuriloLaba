import {
  useRef,
  useMemo,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const GRID_SIZE = 72
const SPACING = 0.22

function DottedWave() {
  const pointsRef = useRef<THREE.Points>(null)
  const basePositions = useMemo(() => {
    const positions = new Float32Array(GRID_SIZE * GRID_SIZE * 3)
    let i = 0

    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y < GRID_SIZE; y++) {
        positions[i] = (x - GRID_SIZE / 2) * SPACING
        positions[i + 1] = (y - GRID_SIZE / 2) * SPACING
        positions[i + 2] = 0
        i += 3
      }
    }

    return positions
  }, [])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(basePositions.slice(), 3))
    return geo
  }, [basePositions])

  useFrame((state) => {
    const points = pointsRef.current
    if (!points) return

    const t = state.clock.elapsedTime * 0.45
    const positions = points.geometry.attributes.position as THREE.BufferAttribute

    for (let i = 0; i < positions.count; i++) {
      const x = basePositions[i * 3]
      const y = basePositions[i * 3 + 1]
      const wave =
        Math.sin(x * 1.1 + t) * Math.cos(y * 1.1 + t * 0.85) * 0.38 +
        Math.sin(x * 0.5 - t * 0.6) * 0.12

      positions.setZ(i, wave)
    }

    positions.needsUpdate = true
    points.rotation.z = t * 0.02
  })

  return (
    <group rotation={[-Math.PI / 2.8, 0, 0]} position={[0, -0.6, 0]}>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          size={0.055}
          color="#D4A017"
          transparent
          opacity={0.42}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  )
}

function DottedScene() {
  return (
    <>
      <color attach="background" args={['#0A0A0A']} />
      <fog attach="fog" args={['#0A0A0A', 6, 14]} />
      <ambientLight intensity={0.4} />
      <DottedWave />
    </>
  )
}

type DottedSurfaceProps = ComponentPropsWithoutRef<'div'> & {
  children?: ReactNode
}

/**
 * Animated 3D dotted wave background (Three.js).
 * API compatible with the 21st.dev / shadcn dotted-surface component.
 */
export function DottedSurface({
  className,
  children,
  ...props
}: DottedSurfaceProps) {
  const reduced = useReducedMotion()

  return (
    <div className={cn('relative overflow-hidden bg-background', className)} {...props}>
      {reduced ? (
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.06)_0%,transparent_65%)]"
          aria-hidden
        />
      ) : (
        <div className="absolute inset-0" aria-hidden>
          <Canvas
            camera={{ position: [0, 3.2, 5.5], fov: 45, near: 0.1, far: 100 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
            style={{ width: '100%', height: '100%' }}
          >
            <DottedScene />
          </Canvas>

          {/* Edge fade + vignette */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0A0A0A_85%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
      )}

      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  )
}
