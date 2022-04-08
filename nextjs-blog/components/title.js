import styles from './title.module.css';

export default function Title({ title, imgSrc }) {
   //"url(" + `${require(imgSrc)}` + ")"
   const imgName= "url(/images/insta/jbellina.jpg)"
    return (
        <div className={styles.Entire}>
            hej
        <div style={{
            backgroundImage: imgName
        }}>
            SZTUDIO \ {' '}
      
           <a>Szabina Loki</a>
        
        </div>
        </div>
    )
  }