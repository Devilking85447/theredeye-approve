"use client"
export default function PayPage() {
  const upiId = 'binnu0117@oksbi';
  const upiLink = `upi://pay?pa=${upiId}&pn=TheRedEye&cu=INR`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiLink)}`;

  return (
    <div style={{maxWidth:420, margin:'50px auto', padding:25, textAlign:'center', fontFamily:'system-ui', border:'1px solid #ddd', borderRadius:16}}>
      <h1 style={{fontSize:24, fontWeight:'bold'}}>Pay TheRedEye</h1>
      <p style={{marginTop:8}}>UPI ID: <b style={{userSelect:'all'}}>{upiId}</b></p>
      
      <img src={qrUrl} alt="UPI QR" width="250" height="250" style={{margin:'20px auto', display:'block'}} />
      <p style={{fontSize:13, color:'#666'}}>Scan with any UPI App</p>

      <a href={upiLink} style={{display:'block', marginTop:20, padding:'16px', background:'#000', color:'#fff', borderRadius:10, textDecoration:'none', fontWeight:'bold', fontSize:16}}>
        Pay Now - Auto Open UPI App
      </a>

      <div style={{marginTop:15, display:'flex', gap:8, justifyContent:'center'}}>
        <a href={`tez://upi/pay?pa=${upiId}&pn=TheRedEye&cu=INR`} style={{flex:1, padding:'10px', border:'1px solid #ccc', borderRadius:8, textDecoration:'none', color:'#000'}}>GPay</a>
        <a href={`phonepe://pay?pa=${upiId}&pn=TheRedEye&cu=INR`} style={{flex:1, padding:'10px', border:'1px solid #ccc', borderRadius:8, textDecoration:'none', color:'#000'}}>PhonePe</a>
        <a href={`paytmmp://pay?pa=${upiId}&pn=TheRedEye&cu=INR`} style={{flex:1, padding:'10px', border:'1px solid #ccc', borderRadius:8, textDecoration:'none', color:'#000'}}>Paytm</a>
      </div>
    </div>
  )
}
