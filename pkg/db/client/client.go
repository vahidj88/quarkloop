package client

import (
	"net/http"
	"net/url"
	"time"
)

type DatabaseHttpClient struct{}

var DatabaseClient = DatabaseHttpClient{}

func (c *DatabaseHttpClient) Get(path string, queryParams *url.Values) (*http.Response, error) {
	req, err := http.NewRequest("GET", path, nil)
	if err != nil {
		return nil, err
	}

	req.Header.Set("Content-Type", "application/json; charset=UTF-8")
	if queryParams != nil {
		req.URL.RawQuery = queryParams.Encode()
	}

	client := http.Client{Timeout: 10 * time.Second}
	res, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

func (c *DatabaseHttpClient) Post() (interface{}, error) {
	return nil, nil
}

func (c *DatabaseHttpClient) Update() (interface{}, error) {
	return nil, nil
}

func (c *DatabaseHttpClient) Delete() (interface{}, error) {
	return nil, nil
}