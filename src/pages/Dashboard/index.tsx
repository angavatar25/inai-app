import { useState } from "react";

import { faArrowRight, faCloudArrowUp, faMagicWandSparkles, faMagnifyingGlass, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Categories from "../../components/Categories";
import NetAssets from "../../components/NetAssets";
import ButtonComponent from "../../components/Button";
import PerformanceCategories from "../../components/PerformanceCategories";
import PerformanceList from "../../components/PerformanceList";
import GrossIncome from "../../components/GrossIncome";

import { Button, DashboardContainer, Title } from "../../styles/dashboard";
import { FlexBetween, MarginCenter } from "../../styles/general";

import { GrossIncomeData, PerformanceData, addNew, filterGainsData, suggestedQueries } from "../../dummy/data";

import useScreenQuery from "../../hooks/useScreenQuery";

const Dashboard = () => {
  const [currentTabNew, setCurrentTabNew] = useState('asset');
  const [currentCountry, setCurrentCountry] = useState('all');
  const [currentPortfolio, setCurrentPortfolio] = useState('all');

  const { isMobile, isDesktop } = useScreenQuery();

  const onClickTabNewAsset = (asset: string) => {
    setCurrentTabNew(asset);
  }

  const onClickCountryCategory = (country: string) => {
    setCurrentCountry(country);
  }

  const onClickPortfolioCategory = (category: string) => {
    setCurrentPortfolio(category);
  }

  return (
    <DashboardContainer>
      <div>
        <FlexBetween>
          <Title $fontSize={24}>Portfolio Dashboard</Title>
          <MarginCenter>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="1x"/>
          </MarginCenter>
        </FlexBetween>
        <Button>
          <FontAwesomeIcon icon={faMagicWandSparkles}/>
          Ask AI assistant
          <FontAwesomeIcon icon={faArrowRight}/>
        </Button>
        <Categories
          onClickCategory={onClickCountryCategory}
        />
        <div style={{ marginTop: '20px' }}>
          <NetAssets
            currentCountry={currentCountry}
          />
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          {addNew.map((data) => (
            <ButtonComponent
              key={`data-${data.short}`}
              onClickButton={() => onClickTabNewAsset(data.short)}
              bgColor={currentTabNew === data.short ? "#4F46E5" : "#fff"}
              color={currentTabNew === data.short ? "#fff" : "#475569"}
              borderColor={currentTabNew === data.short ? 'transparent' : '#CBD5E1'}
              lineHeight={35}
              fontSize={14}
              fontWeight={700}
            >
              <FontAwesomeIcon icon={data.icon}/>
              {data.text}
            </ButtonComponent>
          ))}
        </div>
        <div>
          {isMobile && (
            <>            
              <Title
                $fontSize={18}
                $color="#475569"
                style={{ marginTop: '20px' }}
              >
                Portfolio Performance
              </Title>
              <div>
                <PerformanceCategories
                  filterData={filterGainsData}
                  onClickCategory={onClickPortfolioCategory}
                  currentTab={currentPortfolio}
                />
                <PerformanceList
                  data={PerformanceData}
                  currentPortfolio={currentPortfolio}
                />
              </div>
            </>
          )}
          {isDesktop && (
            <div style={{ marginTop: '20px' }}>
              <GrossIncome
                data={GrossIncomeData}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        {isMobile && (
          <div style={{ marginTop: '20px' }}>
            <GrossIncome
              data={GrossIncomeData}
            />
          </div>
        )}
        {isDesktop && (
          <>            
            <Title
              $fontSize={18}
              $color="#475569"
              style={{ marginTop: '20px' }}
            >
              Portfolio Performance
            </Title>
            <div>
              <PerformanceCategories
                filterData={filterGainsData}
                onClickCategory={onClickPortfolioCategory}
                currentTab={currentPortfolio}
              />
              <PerformanceList
                data={PerformanceData}
                currentPortfolio={currentPortfolio}
              />
            </div>
          </>
        )}
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
        <div style={{ borderBottom: '1px solid #E2E8F0', margin: '20px 0' }}/>
        <div style={{ display: 'flex', gap: '20px'}}>
          <ButtonComponent
            bgColor="#fff"
            color="#475569"
            borderColor="#CBD5E1"
            lineHeight={40}
            fontSize={14}
            fontWeight={700}
          >
            <FontAwesomeIcon icon={faSliders}/>
            Customise
          </ButtonComponent>
          <ButtonComponent
            bgColor="#fff"
            color="#475569"
            borderColor="#CBD5E1"
            lineHeight={40}
            fontSize={14}
            fontWeight={700}
          >
            <FontAwesomeIcon icon={faCloudArrowUp}/>
            Add Widget
          </ButtonComponent>
        </div>
      </div>
    </DashboardContainer>
  )
}

export default Dashboard;