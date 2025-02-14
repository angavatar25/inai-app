import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";

import AssetsBalance from "../../components/AssetsBalance";
import ButtonComponent from "../../components/Button";
import Categories from "../../components/Categories";
import PerformanceCategories from "../../components/PerformanceCategories";
import AssetsList from "../../components/AssetsList";

import { Button, DashboardContainer, Title } from "../../styles/dashboard";
import { FlexBetween } from "../../styles/general";

import { DataPerCountries, filterAssetsData, suggestedQueries } from "../../dummy/data";

const initialAssetData = DataPerCountries[0].data.listOfAssets;

interface TType {
  assetType: string;
  total: number;
  isOpen: boolean;
  bgColor: string;
  group: string;
}

const NetAssets = () => {
  const [currentCountry, setCurrentCountry] = useState('all');
  const [currentAssets, setCurrentAssets] = useState('assets class');
  const [currentAssetsData, setCurrentAssetsData] = useState<any | null>(initialAssetData);

  const onClickCountryCategory = (selectedCountry: string) => {
    setCurrentCountry(selectedCountry.toLowerCase());
  }

  const onClickPortfolioCategory = (category: string) => {
    setCurrentAssets(category);
  }

  useEffect(() => {
    const findAssetsByCountry = DataPerCountries.find((country) => country.country === currentCountry);

    if (findAssetsByCountry) {
      const { data } = findAssetsByCountry;

      const filterByGroup = data.listOfAssets.filter((data: TType) => data.group === currentAssets);

      setCurrentAssetsData(filterByGroup);
    }
  }, [currentCountry, currentAssets]);

  return (
    <DashboardContainer>
      <div>
        <Title $fontSize={24}>Asset balances</Title>
        <Button>
          <FontAwesomeIcon icon={faMagicWandSparkles}/>
          Ask AI assistant
          <FontAwesomeIcon icon={faArrowRight}/>
        </Button>
        <div style={{ marginBottom: '20px' }}>
          <Categories
            onClickCategory={onClickCountryCategory}
          />
        </div>
        <AssetsBalance
          currentCountry={currentCountry}
        />
        <div>
          <Title
            $fontSize={16}
            $color="#000"
            style={{ marginTop: '20px', fontWeight: 700 }}
          >
            AI suggested queries
          </Title>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {suggestedQueries.map((text) => (
              <ButtonComponent
                key={`suggestion-${text}`}
                bgColor="#fff"
                color="#475569"
                borderColor="#CBD5E1"
                lineHeight={40}
                fontSize={14}
                fontWeight={700}
                style={{ justifyContent: 'left', paddingLeft: '20px' }}
              >
                <FontAwesomeIcon icon={faMagicWandSparkles}/>
                {text}
              </ButtonComponent>
            ))}
          </div>
        </div>
      </div>
      <div>
        <FlexBetween>
          <p>Group By</p>
          <div>
            <PerformanceCategories
              filterData={filterAssetsData}
              onClickCategory={onClickPortfolioCategory}
              currentTab={currentAssets}
            />
          </div>
        </FlexBetween>
        <AssetsList
          data={currentAssetsData}
        />
      </div>
    </DashboardContainer>
  )
};

export default NetAssets;