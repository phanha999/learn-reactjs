import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function CounterFeatures(props) {
    const classes = useStyles();

    const getCounter = useSelector( state => state.counter)
    const dispatch = useDispatch();

    const handleOnClickIn = () => {
        const action = increase('them moi thanh cong');
        console.log(action);
        dispatch(action);
    }

    const handleOnClickDe = () => {
        const action = decrease();
        dispatch(action);
    }

    return (
        <div>
            Counter : {getCounter}

            <div>
                <Button className={classes.root} onClick={handleOnClickIn}>
                    Increase
                </Button>
                <Button className={classes.root}  onClick={handleOnClickDe}>
                    Decrease
                </Button>
            </div>
        </div>
    );
}

export default CounterFeatures;