import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import {useState} from "react";
import {baseUrl} from '../baseUrl'
import {Navigate} from "react-router-dom";
import Editor from "../components/Editor";
import Layout from "../Layout/Layout.jsx";
import '../App.css'

const CreatePost = ()=>{
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  const createNewPost=async(ev)=>{
    console.log(files)
    const formData = new FormData();
    formData.set('title', title);
    formData.set('summary', summary);
    formData.set('content', content);
    formData.set('file', files[0]);
    ev.preventDefault();
    const {data} = await axios.post(`${baseUrl}/api/post/create-post`, formData)
    console.log(data)
    if (data.success) {
      setRedirect(true);
    }
    <Navigate to={'/'}/>
  }


  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <Layout style={{'overflow-y':'scroll','max-height':'100vh'}}>
        <h1 style={{'margin-left':'25rem'}}>Create Post</h1>
    <form onSubmit={createNewPost} style={{'margin-bottom':'2rem','max-height':'70vh'}}>
      <input type="title"
             placeholder={'Title'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary"
             placeholder={'Summary'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
      <input type="file"
             onChange={ev => setFiles(ev.target.files)} />
      <Editor value={content} onChange={setContent} />
      <button style={{marginTop:'5px'}}>Create post</button>
    </form>
    </Layout>
  );
}

export default CreatePost