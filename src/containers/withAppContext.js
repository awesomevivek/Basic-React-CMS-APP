import React from 'react';
import AuthContext from '../context/AuthContext';

export default function withAppContext(WrapperComponent) {
    class Wrapper extends React.Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {
                        ({logged, changeLoggedState}) => {
                            return (<WrapperComponent 
                                {...this.props}
                                logged={logged}
                                changeLoggedState={changeLoggedState}
                            />);
                        }
                    }
                </AuthContext.Consumer>
            )
        }
    }

    return Wrapper;
}