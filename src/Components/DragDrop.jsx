import React, { useState } from 'react';
import Picture from './Picture';
import { useDrop } from 'react-dnd';

const PictureList = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  }
]

const DragDrop = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id) ,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
    // setBoard([pictureList[0]])
  }

  return (
    <>
      <div className="grid w-11/12 mx-auto grid-cols-4 gap-10 bg-gray-100 ">
        {PictureList.map((picture) => {
          return <Picture key={picture.id} url={picture.url} id={picture.id} />
        })}
      </div>

      <div className=" bg-gray-300 py-6 text-center mt-10 min-h-screen">
        <h1 className="text-4xl border-b">Board</h1>
        <div className="grid gap-6 grid-cols-2">
          <div ref={drop} className={`grid grid-cols-4 gap-10 min-h-20 py-6  ${isOver ? 'bg-red-400' : 'bg-gray-100'}`}>
            {board.map((picture) => {
              return <Picture key={picture.id} url={picture.url} id={picture.id} />
            })}
          </div>
        </div>

      </div>
    </>
  )
}

export default DragDrop