import { useState } from 'react';

import { TCategories } from '../interface/components';
import { countries } from '../dummy/data';
import { ButtonCountry } from '../styles/components/Button';

const Categories = (props: TCategories) => {
  const [currentCategory, setCurrentCategory] = useState('all');

  const onClickCategory = (category: string) => {
    setCurrentCategory(category.toLowerCase());
    props.onClickCategory(category);
  }

  return (
    <div>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        {countries.map((country) => (
          <ButtonCountry
            onClick={() => onClickCategory(country.text)}
            key={`country-${country.text}`}
            $active={currentCategory === country.text.toLowerCase()}
          >
            <img src={country.icon} alt="" />
            <p>{country.text}</p>
          </ButtonCountry>
        ))}
      </div>
    </div>
  )
}

export default Categories;