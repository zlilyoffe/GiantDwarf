import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../helpers/useStore';

// let groupId = {};
// const response = await axios.post(
//   'http://localhost:4000/api/CreateNewGroup',
//   registered
// );

const LinkPage = () => {
  const store = useStore();
  // const response = await axios.post(
  //   'http://localhost:4000/api/LinkPage',
  //    store.currentGroupId
  // );
  // console.log(response);
  // const codeResult = response.data.code

//   React.useEffect(() => {
//     fetch('http://localhost:4000/api/LinkPage')
//       .then(res => {
//         res.json();
//       })
//       .then(data => {
//         console.log(data);
//   })
// }, []);
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Group created successfully!!!</h1>
        <h2>your group link:{store.currentGroupId}</h2>
        <Link to={`/MyPage`}>
          <button className={'button mt-20'} type="submit">
            lets begin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default observer(LinkPage);
