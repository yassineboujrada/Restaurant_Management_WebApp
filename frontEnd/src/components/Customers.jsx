import { Avatar, Space, Table, Typography, Input, Button , Image,Popconfirm} from "antd";
import { SearchOutlined , ZoomInOutlined} from '@ant-design/icons';
import { useEffect, useState, useRef } from "react";
import Highlighter from 'react-highlight-words';
import { CustomerList } from '/src/helpers/CustomerList.js';

const Customers = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const customerData = CustomerList();

  useEffect(() => {
    setLoading(true);
    setDataSource(customerData.map((item) => ({
      ...item,
      key: item._id,
    })));
    setLoading(false);
  }, [customerData]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex, columnTitle) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${columnTitle}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{
          backgroundColor: '#ffc069',
          padding: 0,
        }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    ),
  });

  return (
    <Space size={20} direction="vertical" style={{ display: 'flex' , alignItems: 'center' ,textAlign: 'center',marginTop:'15px'}}>
     
      <Table
        loading={loading}
        columns={[
          {
            title: "Nom d'utilisateur",
            dataIndex: "username",
            ...getColumnSearchProps("username", "Nom d'utilisateur"),
            width:200,
          },

          {
            title: "Email",
            dataIndex: "email",
            ...getColumnSearchProps("email", "Email"),
            width:400,
          },
          {
            title: "Telephone",
            dataIndex: "phone",
            ...getColumnSearchProps("phone", "Telephone"),
            width:300,
          },
          {
            title: "Actions",
            dataIndex: "actions",
            width: 100,
            render: (text, record) => (
              <Popconfirm
                title="Are you sure to delete this customer?"
               
                okText="Yes"
                cancelText="No"
              >
                <Button type="danger" size="small" style={{backgroundColor: "red" , color:"white"}}>
                  Supprimer
                </Button>
              </Popconfirm>
            ),
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
};

export default Customers;
