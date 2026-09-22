export async function GET() {
  const pa = 'binnu0117@oksbi';
  const pn = 'TheRedEye';
  const base = `upi://pay?pa=${pa}&pn=${pn}&cu=INR`;
  
  return Response.json({
    upi_id: pa,
    // Ye generic link - ispe click karte hi phone GPay/PhonePe/BHIM ka option dega
    upi_link: base,
    // Direct app links
    gpay_link: `tez://upi/pay?pa=${pa}&pn=${pn}&cu=INR`,
    phonepe_link: `phonepe://pay?pa=${pa}&pn=${pn}&cu=INR`,
    paytm_link: `paytmmp://pay?pa=${pa}&pn=${pn}&cu=INR`,
    name: 'TheRedEye'
  });
}
