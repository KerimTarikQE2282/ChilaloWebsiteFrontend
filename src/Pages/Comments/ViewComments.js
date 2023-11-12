import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Paper } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Commenter1 from '../../Resources/Commenter1.png'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const fetchPackages = () => {
  return axios.get('http://localhost:8000/api/Comment/');
};

function useInViewPort() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isObserving, setIsObserving] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
      setIsObserving(true);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isIntersecting, isObserving];
}

function CommentItem({ comment }) {
  const [ref, isIntersecting, isObserving] = useInViewPort();
  const dispatch=useDispatch()
  const navigate=useNavigate()
const handleCommentClick=(comment)=>{
  console.log('the comment',comment)
  dispatch({
    type:'selectVacation',
    payload:comment
  })
navigate('/DetailedComment')
}
  useEffect(() => {
    if (isIntersecting) {
      console.log(`Comment ${comment.id} is in view.`);
      axios.get(`http://localhost:8000/api/comments/${comment.id}/update_seen_status/`)
    }
  }, [isIntersecting, comment.id]);

  return (
    <Paper className="Comment" ref={ref} onClick={()=>handleCommentClick(comment)}>
     <div>
      <img src={Commenter1}/>
     </div>
   <div >
      
    
      <div style={{width: 488, height: 39, color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>{comment.FirstName} {comment.LastName}</div>
<div style={{color: '#9C9C9C', fontSize: 20, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>{comment.Email}<br/>{comment.Issue}<br/>{comment.Phone}</div>
      
      { comment.seen && <DoneIcon/>}
      { comment.inspected && <DoneAllIcon/>}
      </div>
    </Paper>
  );
}

function ViewComments() {
  const { isLoading, data } = useQuery('CommentsFetcher', fetchPackages);

  console.log(data);

  const Comments = data?.data.map((comment) => (
    <CommentItem key={comment.id} comment={comment} />
  ));

  return <div className='ViewComments'>{Comments}</div>;
}

export default ViewComments;