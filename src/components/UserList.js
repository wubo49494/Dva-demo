import React from 'react'
import {connect} from 'dva'
import {Table, Popconfirm, Button} from 'antd'

const UserList = ({dispatch, usersData}) => {
  // 定义表格头部
  function onDelete(id) {
    dispatch({
      type: 'users/delete',
      payload: id
    })
  }
  const columns = [
    {
      title: '用户名',
      dataIndex: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'email'

    },
    {
      title: '手机号',
      dataIndex: 'mobile'
    },
    {
      title: '职位',
      dataIndex: 'position'
    },
    {
      title: '操作',
      render: (text, record) => {
        return(
        <Popconfirm
          title="确定要删除吗？"
          onConfirm={
            // 这里的大括号只是写 js 代码的意思
            () => onDelete(record.id)
          }>
          <Button type="danger">删除</Button>
        </Popconfirm>
      
        )
      }
    }
  ]
  
  return(
    <Table
      columns={columns}
      dataSource={usersData} />
  )
}

export default connect(({users}) => ({
  usersData: users
  })
)(UserList)

