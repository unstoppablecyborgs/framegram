import StoreProvider from './StoreProvider'

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>
}
