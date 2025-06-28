import React from 'react'
import styles from '@styles/howToReach.module.css'
import Image from 'next/image'
import { FaMapMarkerAlt, FaClock, FaRoad, FaInfoCircle, FaTrain, FaBus, FaCar } from 'react-icons/fa'

function HowToReach() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>How to Reach Us</h2>
      
      <div className={styles.cardsContainer}>
        {/* Train Card */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image 
              src="/img/train.jpg" 
              alt="Train" 
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.titleContainer}>
              <div className={`${styles.iconCircle} ${styles.trainIcon}`}>
                <FaTrain color="white" size={22} />
              </div>
              <h3 className={styles.cardTitle}>By Train</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.detailItem}>
                <FaMapMarkerAlt color="var(--color-red)" />
                <p>Chengannur Railway Station</p>
              </div>
              <div className={styles.detailItem}>
                <FaClock color="var(--color-red)" />
                <p>Just <span className={`${styles.highlight} ${styles.trainHighlight}`}>1 km</span> from campus</p>
              </div>
              <div className={styles.detailItem}>
                <FaInfoCircle color="var(--color-red)" />
                <p><span className={`${styles.highlight} ${styles.trainHighlight}`}>Well connected</span> to major cities</p>
              </div>
              <div className={styles.detailItem}>
                <FaClock color="var(--color-red)" />
                <p><span className={`${styles.highlight} ${styles.trainHighlight}`}>2 min</span> drive from venue</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bus Card */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image 
              src="/img/bus.jpg" 
              alt="Bus" 
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.titleContainer}>
              <div className={`${styles.iconCircle} ${styles.busIcon}`}>
                <FaBus color="white" size={22} />
              </div>
              <h3 className={styles.cardTitle}>By Bus</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.detailItem}>
                <FaMapMarkerAlt color="var(--color-orange)" />
                <p>Chengannur Bus Stand</p>
              </div>
              <div className={styles.detailItem}>
                <FaClock color="var(--color-orange)" />
                <p>Only <span className={`${styles.highlight} ${styles.busHighlight}`}>0.5 km</span> from campus</p>
              </div>
              <div className={styles.detailItem}>
                <FaInfoCircle color="var(--color-orange)" />
                <p><span className={`${styles.highlight} ${styles.busHighlight}`}>Regular state and private buses</span></p>
              </div>
              <div className={styles.detailItem}>
                <FaInfoCircle color="var(--color-orange)" />
                <p><span className={`${styles.highlight} ${styles.busHighlight}`}>Affordable</span> and convenient option</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Road Card */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image 
              src="/img/car.jpg" 
              alt="Car" 
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.titleContainer}>
              <div className={`${styles.iconCircle} ${styles.roadIcon}`}>
                <FaCar color="white" size={22} />
              </div>
              <h3 className={styles.cardTitle}>By Road</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.detailItem}>
                <FaRoad color="var(--color-teal)" />
                <p><span className={`${styles.highlight} ${styles.roadHighlight}`}>Well connected</span> by state and national highways</p>
              </div>
              <div className={styles.detailItem}>
                <FaMapMarkerAlt color="var(--color-teal)" />
                <p>Located on <span className={`${styles.highlight} ${styles.roadHighlight}`}>NH-183</span></p>
              </div>
              <div className={styles.detailItem}>
                <FaInfoCircle color="var(--color-teal)" />
                <p>GPS coordinates:</p>
              </div>
              <span className={styles.coordinates}>
                9.319°N, 76.613°E
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToReach