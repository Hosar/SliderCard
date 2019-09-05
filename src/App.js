import React from 'react';
import SliderCard from './SliderCard/SliderCard';
import './App.css';

function App() {
  const imgs1 = [
    "http://3.bp.blogspot.com/-lQWCWQfXt2k/T4eub3G3IzI/AAAAAAAACgI/BI89iwY9Q3A/s1600/Hdhut.blogspot.com+%252813%2529.jpg",
    "http://www.heelsandwheelsonline.com/wp-content/uploads/2010/01/dog_butt_7md5.jpg",
    "https://cdn1-www.dogtime.com/assets/uploads/2010/11/diabetic-dog.jpg",
    "https://www.askideas.com/media/83/Cute-Miniature-Schnauzer-Puppy-Sitting.jpg"
  ]
  const imgs2 = [
    "https://i.pinimg.com/736x/f9/78/2f/f9782f6d4399b02c471282191112c456--st-bernard-puppy-saint-bernard-dog.jpg",
    "https://www.bonecollector.com/wp-content/uploads/2017/02/shed-hunting-dog-training-tips_pic4.jpg",
    "https://www.pets4homes.co.uk/images/articles/4444/large/chronic-lymphocytic-leukaemia-in-dogs-cll-59fed82fd3d4c.jpg",
    "https://blog.petmeds.com/wp-content/uploads/2009/10/hypothyroidism-in-dogs.jpg",
    "https://cdn.orvis.com/images/DBS_SibHusky.jpg",
  ]

  return (
    <div className="App">
      <div className="showCase">
        <SliderCard name="Some Puppies" description="Puppies description" images={imgs1}></SliderCard>
        <SliderCard name="Some Dogs" description="Dogs descriptions" images={imgs2}></SliderCard>
      </div>

    </div>
  );
}

export default App;
