import { Typography } from 'antd';

export default function AppQuote(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography.Title level={2} style={{ color: 'orange' }}>
        {props.author}
      </Typography.Title>
      <Typography.Text italic style={{ color: 'black' }}>
        {props.quote}
      </Typography.Text>
    </div>
  );
}