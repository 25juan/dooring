import {
  RightConfig,
  Container,
  useStoreState,
  innerContainerDragUp,
  LeftConfig,
  ContainerWrapper,
  Control,
} from 'dooringx-lib';
import { useContext } from 'react';
import { configContext } from '@/layouts';
import { useCallback } from 'react';
export const HeaderHeight = '40px';
export default function Home() {
  const config = useContext(configContext);
  const subscribeFn = useCallback(() => {
    localStorage.setItem(
      'PREVIEWSTATE',
      JSON.stringify(config.getStore().getData()),
    );
  }, [config]);
  const [state] = useStoreState(config, subscribeFn);
  return (
    <div {...innerContainerDragUp(config)}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: `calc(100vh - ${HeaderHeight})`,
          width: '100vw',
        }}
      >
        <div style={{ height: '100%' }}>
          <LeftConfig config={config}></LeftConfig>
        </div>

        <ContainerWrapper config={config}>
          <>
            <Control
              config={config}
              style={{
                position: 'fixed',
                bottom: '60px',
                right: '450px',
                zIndex: 100,
              }}
            ></Control>
            <Container state={state} config={config} context="edit"></Container>
          </>
        </ContainerWrapper>
        <div className="rightrender" style={{ height: '100%' }}>
          <RightConfig state={state} config={config}></RightConfig>
        </div>
      </div>
    </div>
  );
}
