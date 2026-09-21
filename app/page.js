export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h3>RedEye Approve API is Live</h3>
      <p>Use POST /api/approve with {"{ email }"} to approve premium.</p>
      <a href="/admin">Go to Admin Panel</a>
    </div>
  )
}
