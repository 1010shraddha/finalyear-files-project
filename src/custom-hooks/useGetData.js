import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";

const useGetData = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const collectionRef = collection(db, collectionName);

    const unsubscribe = onSnapshot(
      collectionRef,
      (snapshot) => {
        if (snapshot.empty) {
          console.warn(`No data found in Firestore collection: ${collectionName}`);
        }

        let results = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(results);
        setLoading(false);
        console.log(` Data fetched successfully from ${collectionName}:`, results);
      },
      (error) => {
        console.error(`Firestore fetch error in ${collectionName}:`, error.message);
        setError(error.message);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup listener
  }, [collectionName]);

  return { data, loading, error };
};

export default useGetData;
