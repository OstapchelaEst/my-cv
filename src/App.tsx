import './styles/global.scss'

import {
  Skills,
  Hero,
  Summary,
  SummaryImg,
  Contacts,
} from './components/sections'
import { Navigation, SettingsMenu, ScrollPage } from '@/components/ui'
import { Translate } from '@/components/parts'
import { StepsWrapper } from '@/components/hoc/steps-wrapper'

function App() {
  return (
    <div>
      <Navigation />

      <SettingsMenu>
        <Translate />
      </SettingsMenu>

      <StepsWrapper>
        <ScrollPage step={1}>
          <Hero />
        </ScrollPage>

        <ScrollPage
          position="right"
          step={2}
        >
          <Summary />
        </ScrollPage>

        <ScrollPage
          position="left"
          step={3}
        >
          <SummaryImg />
        </ScrollPage>

        <ScrollPage
          position="right"
          step={4}
        >
          <Skills />
        </ScrollPage>

        <ScrollPage step={5}>
          <Contacts />
        </ScrollPage>
      </StepsWrapper>
    </div>
  )
}

export default App
