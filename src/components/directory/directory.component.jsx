import CategororyItem from "../category-item/category-item.component"
import './directory.style.scss'

const Directory=({categories})=>(
    <div className="directory-container">
    {categories.map((category) => (
     <CategororyItem key={category.id} category={category}/>
     ) )}
  </div>
)
export default Directory;