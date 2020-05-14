import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type Props = {
    rating: number
}
const StarRatingContainer = styled.div`
    margin-bottom: 15px;

    .checked {
        color: #ffa500;
    }
`

const StarRating: React.FC<Props> = ({ rating }) => {
    return (
        <StarRatingContainer>
            {[1, 2, 3, 4, 5].map(i => {
                return i <= rating ? (
                    <FontAwesomeIcon
                        icon={faStar}
                        className="checked"
                        key={i}
                    />
                ) : (
                        <FontAwesomeIcon icon={faStar} key={i} />
                    );
            })}
        </StarRatingContainer>
    )
}

export default StarRating;