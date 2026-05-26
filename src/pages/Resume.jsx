import React from 'react';

const Resume = () => {
  const resumeUrl = "https://api.cloudinary.com/v1_1/dm0rfcoxl/image/download?api_key=292658888953328&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiNDgwMzJmODgxODEwZDVmZTVmODUzMjQ1Y2JmZGQwODkiLCJ1c2VyX2V4dGVybmFsX2lkIjoiNzRlYTc5YmNmNmJiYWI5NjhjNzgxMjJiMjhlNTY0IiwidXNlcl9jdXN0b21faWQiOiJiaGFkb3JpeWFzYWNoaW4zM0BnbWFpbC5jb20iLCJjb21wb25lbnQiOiJjb25zb2xlIn0%3D&public_id=Sachin_Bhadoriya_Frontend_Developer_i3hyqj&signature=9d5d3bff0cc80af4b3e525aefd086b4b105e916a&source=ml&target_filename=Sachin_Bhadoriya_Frontend_Developer&timestamp=1779813691&type=upload";

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <embed 
        src={resumeUrl} 
        type="application/pdf" 
        width="100%" 
        height="100%" 
      />
    </div>
  );
};

export default Resume;