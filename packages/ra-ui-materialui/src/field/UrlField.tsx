import * as React from 'react';
import { AnchorHTMLAttributes, memo } from 'react';
import get from 'lodash/get';
import sanitizeFieldRestProps from './sanitizeFieldRestProps';
import { Typography, Link } from '@material-ui/core';
import { useRecordContext } from 'ra-core';
import { PublicFieldProps, InjectedFieldProps, fieldPropTypes } from './types';

const UrlField = memo<UrlFieldProps>((props: UrlFieldProps) => {
    const { className, emptyText, source, ...rest } = props;
    const record = useRecordContext(props);
    const value = get(record, source);

    if (value == null) {
        return (
            <Typography
                component="span"
                variant="body2"
                className={className}
                {...sanitizeFieldRestProps(rest)}
            >
                {emptyText}
            </Typography>
        );
    }

    return (
        <Link
            className={className}
            href={value}
            {...sanitizeFieldRestProps(rest)}
        >
            {value}
        </Link>
    );
});

// @ts-ignore
UrlField.defaultProps = {
    addLabel: true,
};
// @ts-ignore
UrlField.propTypes = fieldPropTypes;
UrlField.displayName = 'UrlField';

export interface UrlFieldProps
    extends PublicFieldProps,
        InjectedFieldProps,
        AnchorHTMLAttributes<HTMLAnchorElement> {}

export default UrlField;
