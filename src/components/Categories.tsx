import { useState } from 'react';

import styled from 'styled-components';

import Globe from '../public/assets/globe.svg';
import AustraliaFlag from '../public/assets/flag-australia.svg';
import UsaFlag from '../public/assets/flags-usa.svg';
import EuropeFlag from '../public/assets/flag-europe.svg';

interface TCategories {
  onClickCategory: (data: string) => void;
}

const countries = [
  { text: 'All', icon: Globe },
  { text: 'Australia', icon: AustraliaFlag },
  { text: 'USA', icon: UsaFlag },
  { text: 'Europe', icon: EuropeFlag },
];

const Button = styled.button<{ $active: boolean }>`
  background-color: #fff;
  border: ${props => props.$active ? '1px solid #4F46E5' : 'none' };
  color: ${props => props.$active ? '#4F46E5' : '#475569' };
  border-radius: 99px;
  font-weight: 600;
  padding: 8px 12px 8px 12px;
  display: flex;
  gap: 5px;
  p {
    margin: 0;
  }
`

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
          <Button
            onClick={() => onClickCategory(country.text)}
            key={`country-${country.text}`}
            $active={currentCategory === country.text.toLowerCase()}
          >
            <img src={country.icon} alt="" />
            <p>{country.text}</p>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Categories;