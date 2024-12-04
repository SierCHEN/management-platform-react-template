import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SmokeMachine from '@bijection/smoke'
import styles from './home.module.css'
// import { Header } from '../../components'

export const HomePage = () => {
  const navigate = useNavigate()
  const gotoAiDialog = () => {
    navigate('/guide')
  }

  const [innerWidth, setWidth] = useState(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
  const [innerHeight, setHeight] = useState(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)

  const useCanvas = () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = innerWidth
    canvas.height = innerHeight
    const party = SmokeMachine(ctx, [18, 16, 54])

    const smokePlay = () => {
      party.start() // start animating
      party.setPreDrawCallback(function (dt) {
        party.addSmoke(innerWidth / 2, innerHeight, 0.5)
        canvas.width = innerWidth
        canvas.height = innerHeight
      })
    }

    const smokeStop = () => {
      party.stop()
    }

    onmousemove = function (e) {
      const x = e.clientX
      const y = e.clientY
      const n = 0.5
      const t = Math.floor(Math.random() * 200) + 3800
      party.addsmoke(x, y, n, t)
    }
    return { smokePlay, smokeStop }
  }

  const handleResize = () => {
    setWidth(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
    setHeight(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
  }

  useEffect(() => {
    const { smokePlay, smokeStop } = useCanvas()
    smokePlay()
    window.addEventListener('resize', handleResize)

    // // 清理函数，移除监听器
    return () => {
      smokeStop()
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className={styles.homeWrapper}>
      {/* <Header /> */}
      <canvas id="canvas" className={styles.canvas} />
      <div className={styles.title} onClick={gotoAiDialog}>
        <div>start</div>
      </div>
    </div>
  )
}
