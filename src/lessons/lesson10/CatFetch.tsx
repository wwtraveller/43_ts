import { useEffect, useState } from 'react';
import MyButton from '../../components/myButton/MyButton';
import styles from './catFetch.module.css'
import { setConstantValue } from 'typescript';
function CatFetch () {

    interface ICatData {
        fact: string;
        length: number;
      }
    
    //   const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    //   const [cat, setCat] = useState<ICatData[]>({
    //     fact: '',
    //     length: 0
    //   });
    const [catFacts, setCat] = useState<ICatData[]>([])
    
      const fetchCat = () => {
        setLoading(true);
        fetch('https://catfact.ninja/fact')
          .then(res => res.json())
          .then(data => {setCat(prevFacts => [...prevFacts, data]);
            setLoading(false);
          });
      };

      useEffect(() => {
        fetchCat();
      }, []);
    
    
      const handleGetMore = () => {
        fetchCat();
        // setCat({cat.fact});
      };
      const handleDelete = () => {
        setCat([]);
      };

    // const catsFacts:ICatData[] = []
    // console.log(catsFacts);

    //   const handleReset = () => {
    //     setLike(0)
    //     setDislike(0)
    //  }

    return (
    //     <div className="lesson-container">
    //         <div>
    //             <h3>Cat facts</h3>
    //         {/* <p>{count}</p> */}
    //         <MyButton name={'GET MORE INFO'} onClick={handleGetMore} />
    //         <p>{cat.fact}</p>
    //         <p></p>
    //         <MyButton name={'DELETE ALL DATA'} onClick={handleDelete} />
    //         </div>
    //     </div>
    //     <div className="lesson-container">
    //     <div>
    //         <h3>Cat facts</h3>
    //     <p>{count}</p>
    //     <MyButton name={'GET MORE INFO'} onClick={handlePlus} />
    //     <img width={120} src={cat.fact} alt="" />
    //     <p></p>
    //     <MyButton name={'DELETE ALL DATA'} onClick={handlePlus} />
    //     </div>
    // </div>
     <div className="lesson-container">
       <div className={styles.cat}>
       {loading && <div className={styles.spinner}></div>}
     {!loading && catFacts.map((fact, index) => (
         <div key={index} className={styles.catFact}>
             <p>{fact.fact}</p>
         </div>
     ))}
     </div> 
     <MyButton name={'GET MORE INFO'} onClick={handleGetMore} />
     {catFacts.length > 0 && <MyButton name={'DELETE ALL DATA'} onClick={handleDelete} />}
     
 </div>
);
}
export default CatFetch;

    