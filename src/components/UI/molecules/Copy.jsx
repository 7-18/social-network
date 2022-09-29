export const Copy = () => {
  const year = new Date().getFullYear();
  return (
    <div className="copy">
      <div>
        <p>&copy; {year} 7-18. All rights reserved</p>
      </div>
    </div>
  )
}