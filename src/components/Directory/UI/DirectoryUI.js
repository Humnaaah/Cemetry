import React,{ Fragment, useState } from 'react';
import { Input } from 'antd';
import NoResult from './NoResult';
import styles from '../Assets/directory.module.css';
import DirectoryList from './DirectoryList';

const { Search } = Input;
const DirectoryUI=(props)=>{
    const [post,setPost] = useState(props.data);
    const [allPosts,setAllPost] =  useState(props.data);
      const _onKeyUp = (e) => {
        // filter post list by title using onKeyUp function
        console.log('Entering into the function', e, e.toLowerCase())
        const post = allPosts.filter((item) =>
            item.rendered.toLowerCase()
                .includes(e.toLowerCase())
        );
            setPost(post)
    }; 
    const onKeyDown=(e)=> {
      if (e.keyCode === 8) {
          console.log('clearing data');
          setPost(props.data)
      }
  };

    
    return(
        <Fragment>
             <h1 className='headTitle'> Gardens of Peace Directory </h1>
             <div className='row'>
                 <div className='col-lg-12 col-sm-12 col-md-12'>
                    <div className={styles.searchInput}>
                        <Search className={styles.search} placeholder="Search" onKeyDown={onKeyDown} onSearch={ _onKeyUp}
                         enterButton
                         />
                    </div>
                    <div className='row'>
                      <div className='col-lg-12 col-sm-12 col-md-12'>
                        {post.length !==0? 
                          post.map((list,i)=> <DirectoryList data={list} key={i}/>)  
                          :
                          <NoResult/>
                        }
                      </div>
                    </div>
                   
                 </div>
             </div>
        </Fragment>
    )
}

export default DirectoryUI