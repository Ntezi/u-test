DROP TABLE IF EXISTS account CASCADE;
CREATE TABLE account
(
    account_id BIGINT         NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name       VARCHAR(255)   NOT NULL DEFAULT 'N/A',
    net_salary DECIMAL(10, 2) NOT NULL DEFAULT 'N/A'
);

DROP TABLE IF EXISTS account_saving_balance CASCADE;
CREATE TABLE account_saving_balance
(
    account_id    BIGINT         NOT NULL DEFAULT 0,
    commitment_id BIGINT         NOT NULL DEFAULT 0,
    balance       DECIMAL(10, 2) NOT NULL DEFAULT 0,
    PRIMARY KEY (account_id, commitment_id),
    FOREIGN KEY (account_id) REFERENCES account (account_id),
    FOREIGN KEY (commitment_id) REFERENCES commitment (commitment_id)
);

DROP TABLE IF EXISTS saving_type CASCADE;
CREATE TABLE saving_type
(
    saving_type_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name           VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS commitment CASCADE;
CREATE TABLE commitment
(
    commitment_id  BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    saving_type_id BIGINT         NOT NULL DEFAULT 0,
    amount         DECIMAL(10, 2) NOT NULL DEFAULT 0,
    FOREIGN KEY (saving_type_id) REFERENCES saving_type (saving_type_id)
);
