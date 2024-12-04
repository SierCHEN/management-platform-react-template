import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './guide.module.css'
import guide_bg from '../../assets/images/guide_bg.png'

export const GuidePage = () => {
  return (
    <div className={styles.guideWrapper}>
      <div>导航页</div>
      <img src={guide_bg} />
    </div>
  )
}
