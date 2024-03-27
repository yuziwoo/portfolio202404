import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from '../styles/GlobalStyle';

interface StorybookDecoratorProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const StorybookDecorator = ({
  children,
  style = {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
}: StorybookDecoratorProps) => {
  return (
    <div style={style}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          {children}
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default StorybookDecorator;
