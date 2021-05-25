import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      
      <header>
        <div className={styles.container}>
          <h1>ヘッダー</h1>
          {/*  
          <div　className={styles.header}>
            <div className={styles.logo}>
              <h1>LOGO</h1>
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.name}>
              <p>〇〇さん</p>
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.option}>
              <p>⚙</p>
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.kinmu}>
              <p>勤務中</p>
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.place}>
              <p>A棟２階フリースペース</p>
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.burger}>
              <p>三</p>
            </div>
          </div>
          */}
        </div>
      </header>
      
      <div className={styles.toukou}>
        <div className={styles.btnNew}>
          <a href="new.js">新規投稿</a>
          
        </div>
        <div className={styles.search} >
          <input type="search" placeholder="キーワード"/>
        </div>

        <div className={styles.select}>
          <p>カテゴリー</p>
          <select name="pref1">
            <option value="">選択してください</option>
            <option value="カテゴリ1">カテゴリ1</option>
            <option value="カテゴリ2">カテゴリ2</option>
            <option value="カテゴリ3">カテゴリ3</option>
            <option value="カテゴリ4">カテゴリ4</option>
            <option value="カテゴリ5">カテゴリ5</option>
          </select>
        </div>
      </div>
      <div className={styles.main}>
        <div>
          <p>掲示板</p>
        </div>
        <div className={styles.keiji}>
          a
        </div>
      </div>
      <div className={styles.kotei}>
        <div>
          <p>固定掲示物の掲示板</p>
        </div>
      </div>
    </div>
    
  )
}
