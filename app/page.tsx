import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import Categories from '@/Components/Categories/Categories'
import Footer from '@/Components/Footer/Footer'
import BlogCard from '@/Components/BlogCard/BlogCard'
import NewArrivals from '@/Components/NewArrivals/NewArrivals'


export default function page() {
  return (
    <>
      <Navbar />
      <BlogCard />
      <NewArrivals />
      <Categories />
      <Footer />
    </>
  )
}


// interface props{

// }
// interface state{

  
// }

// export default class Home extends Component<props, state>{
//   constructor(props: any){
//     super(props);
//   }
//   render() {
//     return (
//       <>
//         <Navbar />
//         {/* <BlogCard /> */}
//         <NewArrivals />
//         <Categories />
//         <Footer />
//       </>
//     )
//   }
// }
