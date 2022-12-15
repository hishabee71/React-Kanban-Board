import React from 'react';
import Button from '../Components/buttons/Button';
import TaskBoard from '../Components/card/TaskBoard';
import Header from '../Components/common/Header';
import Input from '../Components/form/Input';

const TaskManage = () => {
  return (
    <main className='bg-gray-50 h-screen'>
      <Header />

      <form className='container py-6 space-y-6 pt-20'>
        <h2 className='text-center text-gray-700 font-bold text-3xl'>Create Your Tasks</h2>

        <div className='flex justify-center gap-4'>
          <Input type="text" divStyle="md:w-6/12" inputStyle="md:h-16" />
          <Button type="button" text="Create Task" />
        </div>
      </form>

      <section className='container'>
        <div className="grid grid-cols-3 gap-8">
          <TaskBoard Style="h-[600px]">
            <div className="absolute w-full left-0 top-0 border-b bg-blue-50 py-3 rounded-t">
              <h3 className='text-center text-3xl text-gray-600'>New Task</h3>
            </div>
          </TaskBoard>
          <TaskBoard Style="h-[600px]">
            <div className="absolute w-full left-0 top-0 border-b bg-yellow-50 py-3 rounded-t">
              <h3 className='text-center text-3xl text-gray-600'>In Progress</h3>
            </div>
          </TaskBoard>
          <TaskBoard Style="h-[600px]">
            <div className="absolute w-full left-0 top-0 border-b bg-green-50 py-3 rounded-t">
              <h3 className='text-center text-3xl text-gray-600'>Complete</h3>
            </div>
          </TaskBoard>
        </div>
      </section>
    </main>
  )
}

export default TaskManage;