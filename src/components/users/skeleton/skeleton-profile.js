import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonProfile = (props) => (
  <ContentLoader
    speed={2}
    width={700}
    height={400}
    viewBox="0 0 700 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="239" rx="5" ry="5" width="180" height="10" />
    <rect x="107" y="122" rx="0" ry="0" width="2" height="2" />
    <rect x="115" y="118" rx="0" ry="0" width="1" height="0" />
    <rect x="3" y="201" rx="5" ry="5" width="180" height="10" />
    <rect x="5" y="16" rx="10" ry="10" width="130" height="130" />
    <rect x="5" y="167" rx="5" ry="5" width="180" height="10" />
  </ContentLoader>
)

export default SkeletonProfile