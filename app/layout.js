export const metadata = { title: atob('UmVkRXllIEFwcHJvdmU='), description: atob('UHJlbWl1bSBBcHByb3ZhbCBTeXN0ZW0=') };

export default function RootLayout({ children }) {
  const _h = atob('aHRtbA==');
  const _b = atob('Ym9keQ==');
  const _e = atob('ZW4=');
  
  return (
    <html lang={_e}>
      <body style={{ margin: 0, background: '#000', color: '#fff', fontFamily: 'monospace' }} suppressHydrationWarning>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                const _0x = () => {
                  try {
                    // Disable right click + inspect
                    document.addEventListener('contextmenu', e => e.preventDefault());
                    document.addEventListener('keydown', e => {
                      if(e.keyCode==123 || (e.ctrlKey && e.shiftKey && (e.keyCode==73 || e.keyCode==74 || e.keyCode==67)) || (e.ctrlKey && e.keyCode==85)) e.preventDefault();
                    });
                    // Clear console loop
                    setInterval(()=>{console.clear()}, 1000);
                    // Debugger trap
                    setInterval(()=>{debugger}, 2000);
                  } catch(e){}
                };
                _0x();
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
