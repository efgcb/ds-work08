import ContentLoader from "react-content-loader"

const ResultLoader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"   
  >
    <rect x="66" y="1" rx="3" ry="3" width="410" height="6" /> 
    <rect x="64" y="40" rx="3" ry="3" width="380" height="6" /> 
    <rect x="1" y="-1" rx="0" ry="0" width="46" height="51" /> 
    <rect x="65" y="21" rx="3" ry="3" width="410" height="6" />
  </ContentLoader>
)

export default ResultLoader;

