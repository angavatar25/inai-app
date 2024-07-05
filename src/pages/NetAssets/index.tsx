import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AssetsBalance from "../../components/AssetsBalance";
import ButtonComponent from "../../components/Button";
import { Button, DashboardContainer, Title } from "../../styles/dashboard";
import { faArrowRight, faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";
import Categories from "../../components/Categories";
import { useEffect, useState } from "react";
import { FlexBetween } from "../../styles/general";
import PerformanceCategories from "../../components/PerformanceCategories";
import AssetsList from "../../components/AssetsList";
import { DataPerCountries, filterAssetsData, suggestedQueries } from "../../dummy/data";

const initialAssetData = [
  {
    assetType: 'Bank accounts',
    total: 8903000,
    isOpen: true,
    bgColor: '#01B7D4',
    list: [
      {
        name: 'NAB',
        totalAssets: 6747000,
        data: [
          {
            name: 'Morgan Supperannuation Fund',
            totalAsset: 1128000
          }
        ]
      }
    ]
  },
  {
    assetType: 'Managed funds',
    total: 8903000,
    isOpen: true,
    bgColor: '#FA7315',
    list: [
      {
        name: 'NAB',
        totalAssets: 6747000,
        data: [
          {
            name: 'Morgan Supperannuation Fund',
            totalAsset: 1128000
          }
        ]
      }
    ]
  }
]

const NetAssets = () => {
  const [currentCountry, setCurrentCountry] = useState('all');
  const [currentAssets, setCurrentAssets] = useState('assets class');
  const [currentAssetsData, setCurrentAssetsData] = useState(initialAssetData);

  const onClickCountryCategory = (selectedCountry: string) => {
    setCurrentCountry(selectedCountry);
  }

  const onClickPortfolioCategory = (category: string) => {
    setCurrentAssets(category);
  }

  

  useEffect(() => {
    const findAssetsByCountry = DataPerCountries.find((country) => country.country === currentCountry);

    if (findAssetsByCountry) {
      setCurrentAssetsData(findAssetsByCountry?.data.listOfAssets);
    }
  }, [currentCountry]);

  return (
    <DashboardContainer>
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
    </DashboardContainer>
  )
};

export default NetAssets