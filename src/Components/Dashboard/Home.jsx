import React, { useRef, useState } from "react";
import { auth, storage, db } from "../../Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
const signOutHandler = () => {
  auth.signOut();
};
const convertToHyphen = (str) =>
  str.toLowerCase().replace(/\s+/g, "-").split("-").slice(0, 3).join("-");
const Home = () => {
  const form = useRef();
  const featsRef = useRef();
  const [feats, setFeats] = useState([]);
  const submitPostHandler = (e) => {
    e.preventDefault();
    const featsArray = Array.from(featsRef.current.children);

    featsArray.forEach((feat) => {
      const featName = feat.children[0].value;
      const featDescription = feat.children[1].value;
      setFeats((prevFeats) => [...prevFeats, { featName, featDescription }]);
    });
    const title = form.current[0]?.value;
    const description = form.current[1]?.value;
    const faq = form.current[2]?.value;
    const faqDescription = form.current[3]?.value;
    const faqs = [{ faq, faqDescription }];
    const imageSrc = form.current[5]?.files[0];

    const id = convertToHyphen(title);

    const storageRef = ref(storage, `imageSrcs/cars/${imageSrc.name}`);
    uploadBytes(storageRef, imageSrc).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (url) => {
            savePost({ id, title, description, feats, faqs, imageSrc: url });
          },
          (err) => {
            console.log(err);
            savePost({ id, title, description, feats, faqs, imageSrc: null });
          }
        );
      },
      (err) => {
        console.log(err);
        savePost({ id, title, description, feats, faqs, imageSrc: null });
      }
    );
  };

  const savePost = async (post) => {
    try {
      await addDoc(collection(db, "car-rental"), post);
      window.location.reload();
    } catch (err) {
      alert("Failed to upload");
    }
  };
  const addFeat = (e) => {
    e.preventDefault();
    const newComponentId = uuidv4();
    const newComponent = {
      id: newComponentId,
      content: <FeatComp />,
    };

    setComponentArray((prevArray) => [...prevArray, newComponent]);
  };
  const [componentArray, setComponentArray] = useState([]);
  const FeatComp = () => {
    return (
      <>
        <input type="text" placeholder="feature" style={{ display: "block" }} />
        <textarea name="description" placeholder="description"></textarea>
      </>
    );
  };
  const addFaq = (e) => {};
  return (
    <form ref={form} onSubmit={submitPostHandler}>
      <div>
        <input type="text" placeholder="Model" />
      </div>
      <div>
        <textarea name="description" placeholder="description"></textarea>
      </div>

      <div>
        <input type="text" placeholder="faq" />
        <br />
        <textarea name="description" placeholder="description"></textarea>
        <button onClick={addFaq}>add an faq</button>
      </div>
      <div>
        <input type="file" placeholder="imageSrc" />
      </div>
      <div ref={featsRef}>
        {componentArray.map((component) => (
          <div key={component.id}>{component.content}</div>
        ))}
      </div>
      <button onClick={addFeat}>add a feature</button>
      <button type="submit">Submit</button>
      <button onClick={signOutHandler}>Sign Out</button>
    </form>
  );
};

export default Home;
