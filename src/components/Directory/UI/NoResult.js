import React from 'react';
import { Fragment } from 'react';
import { Empty } from 'antd';
import styles from '../Assets/directory.module.css';
import SearchIcon from '@material-ui/icons/Search'; 

const NoResult=()=>{
    return(
        <Fragment>
             <div className={styles.noResult}>
                <Empty image={<SearchIcon className={styles.resultIcon}/>} description="No Result Found"  />
            </div>
        </Fragment>
    )
}

export default NoResult