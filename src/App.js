import './App.css';

import { cartoons, vegetables, bouquet, DonationData, cars, studentData } from './data/data';

import { ShowImage} from './questions/ShowImage';
import { CharactersMagnitudeGreaterThan5 } from './questions/CharactersMagnitudeGreaterThan5';
import {CartoonsMagnitudeEvenNumber} from './questions/CartoonsMagnitudeEvenNumber'
import { CartoonsSuperpower } from './questions/CartoonsSuperpower';
import { VegetablesList } from './questions/VegetablesList';
import { Bouquet } from './questions/Bouquet';
import { Donation } from './questions/Donation'; 
import { CarsCategories } from './data/CarsCategories';
import { Certification } from './questions/Certification';

function App() {
  return (
    <div className="App">
      <ShowImage link={"https://picsum.photos/200"} imgHeight={"300px"} imgWidht={"300px"}/>

      <CharactersMagnitudeGreaterThan5 cartoons={cartoons}/>

      <CartoonsMagnitudeEvenNumber cartoons={cartoons} />

      <CartoonsSuperpower cartoons={cartoons} filterSuperpower={"Intelligence"} />

      <VegetablesList vegetables={vegetables} />

      <Bouquet bouquet = {bouquet}/>

      <Donation DonationData={DonationData}/>

      <CarsCategories cars={cars} />

      <Certification students={studentData}/>
    </div>
  );
}
export default App;
