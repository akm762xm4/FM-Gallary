import {
  Routes as Routing,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom"
import { PhotoList } from "../features/photo/list/PhotoList"
import { PhotoInfo } from "../features/photo/info/PhotoInfo"
import { VideoList } from "../features/video/list/VideoList"
import { VideoInfo } from "../features/video/info/VideoInfo"
import { CollectionList } from "../features/collection/list/CollectionList"
import { CollectionInfo } from "../features/collection/info/CollectionInfo"
import { Result } from "../features/search/result/Result"
export const Routes = () => {
  const location = useLocation()
  return (
    <Routing location={location} key={location.pathname}>
      <Route path="/photo/">
        <Route path="" element={<PhotoList />} />
        <Route path=":photoId" element={<PhotoInfo />} />
      </Route>
      <Route path="/video/">
        <Route path="" element={<VideoList />} />
        <Route path=":videoId" element={<VideoInfo />} />
      </Route>
      <Route path="/collection/">
        <Route path="" element={<CollectionList />} />
        <Route path=":cId" element={<CollectionInfo />} />
      </Route>
      <Route path="/search/:term" element={<Result />} />
      <Route path="*" element={<Navigate to="/photo" />} />
    </Routing>
  )
}
