import { Space, Table, Typography, Input, Button ,Select} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useState, useRef } from "react";
import Highlighter from 'react-highlight-words';
import { OrderList } from '/src/helpers/OrderList.js';

const { Option } = Select;

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const orderData = OrderList();

  
  useEffect(() => {
    setLoading(true);
    setDataSource(orderData.map((item) => ({
      ...item,
      key: item._id,
    })));
    setLoading(false);
  }, [orderData]);

  const handleStatusChange = (key, newStatus) => {
    // Find the index of the row with the given key in the dataSource
    const rowIndex = dataSource.findIndex((item) => item.key === key);

    if (rowIndex !== -1) {
      // Create a copy of the dataSource and update the status for the selected row
      const updatedDataSource = [...dataSource];
      updatedDataSource[rowIndex] = { ...updatedDataSource[rowIndex], dishStatus: newStatus };

      // Update the state with the new list of data
      setDataSource(updatedDataSource);

      // You might also want to send the updated status to your server/API
      // to persist the change in the database for the selected order
    }
  };

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
            title: "Plats",
            dataIndex: "dishes",
            ...getColumnSearchProps("dishes", "Plats"),
            width: 400,
            render: (dishes) => dishes.map(dish => dish.name).join(' , '), // Display dish names
          },
          {
            title: "Prix",
            dataIndex: "dishes",
            ...getColumnSearchProps("dishes", "Prix"),
            width: 300,
            render: (dishes) => dishes.map(dish => dish.price).join(' + '), // Display dish names
          },
          {
            title: "Total",
            dataIndex: "totalAmount",
            ...getColumnSearchProps("totalAmount", "Total"),
            width: 100,
          },
           {
            title: "État de la commande",
            dataIndex: "dishStatus",
            width: 120,
            render: (status, record) => (
              <Select
                style={{ width: 120 }}
                value={status}
                onChange={(value) => handleStatusChange(record.key, value)}
              >
                
                <Option value="En préparation">En préparation</Option>
                <Option value="Prête">prête</Option>
              </Select>
            ),
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

export default Orders;
