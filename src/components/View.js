import React, { useEffect, useState } from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, tableContainerClasses } from '@mui/material';





const View = () => {
  const [blogs, setBlogs] = useState([]);
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <Typography variant="h4" component="h2" sx={{ marginTop: 2, marginBottom: 2 }}>
        Blog Dashboard
      </Typography>
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.id}</TableCell>
                <TableCell>{blog.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default View;