import { Avatar, Space, Table, Typography, Input, Button , Image } from "antd";
import { SearchOutlined , ZoomInOutlined} from '@ant-design/icons';
import { useEffect, useState, useRef } from "react";
import Highlighter from 'react-highlight-words';
import { MenuList } from '../helpers/MenuList.js';
import "../styles/Inventory.css";

const Inventory = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const menuData = MenuList();

  useEffect(() => {
    setLoading(true);
    // Assuming 'MenuList' contains your data
    setDataSource(menuData.map((item) => ({
      ...item,
      key: item._id,
    })));
    // console.log(menuData);
    // console.log(dataSource);
    
    setLoading(false);
    
  }, [menuData]);

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
    <Space size={30} direction="vertical" style={{ display: 'flex' , alignItems: 'center' ,textAlign: 'center',marginTop:'15px'}}>
      
      <Table
        loading={loading}
        columns={[
          {
            title: "Image",
            dataIndex: "image_url",
            render: (link) => (
                <Image
                  src={link}
                  width={50}
                  height={50}
                  preview={{ mask: <ZoomInOutlined /> }}
                />
              ),
              width: 100,
            
          },
          {
            title: "Nom",
            dataIndex: "name",
            ...getColumnSearchProps("name", "Nom"),
            width: 600,
          },
          {
            title: "Prix",
            dataIndex: "price",
            render: (value) => <span>{value}DH</span>,
            ...getColumnSearchProps("price", "Prix"),
            width: 100,
          },
          {
            title: "Stock",
            dataIndex: "stock",
            ...getColumnSearchProps("stock", "Stock"),
            width: 100,
          },
          {
            title: "Catégorie",
            dataIndex: "category",
            ...getColumnSearchProps("category", "Catégorie"),
            width: 100,
          },
          
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 7,
        }}
        
      ></Table>
    </Space>
  );
};

export default Inventory;
