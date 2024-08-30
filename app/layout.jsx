import '@/assets/styles/globals.css';

export const metadata = {
  title : 'next js property plus',
  keywords : 'rental property ',
  description : 'find the perfect property'
}

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
