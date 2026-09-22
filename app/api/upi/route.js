export async function GET() {
  return Response.json({
    upi_id: 'binnu0117@oksbi',
    upi_link: 'upi://pay?pa=binnu0117@oksbi&pn=TheRedEye&cu=INR',
    name: 'TheRedEye'
  })
}
